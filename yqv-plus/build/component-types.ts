import path from "path";
import fs from "fs/promises";
import * as vueCompiler from "@vue/compiler-sfc";
import { Project, SourceFile } from "ts-morph";
import glob from "fast-glob";
import { pathRewriter } from "./utils";
import { compRoot, outDir, projectRoot } from "./utils/paths";

async function genTypes() {
    const project = new Project({
        compilerOptions: {
            allowJs: true,
            declaration: true,
            emitDeclarationOnly: true,
            noEmitOnError: true,
            outDir: path.resolve(outDir, "types"),
            baseUrl: projectRoot,
            paths: {
                "@yqv-plus/*": ["packages/*"],
            },
            skipLibCheck: true,
            strict: false,
        },
        tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
        skipAddingFilesFromTsConfig: true,
    });

    const filePaths = await glob("**/*", {
        cwd: compRoot,
        onlyFiles: true,
        absolute: true,
    });

    const sourceFiles: SourceFile[] = [];
    await Promise.all(
        filePaths.map(async (file) => {
            if (file.endsWith(".vue")) {
                const content = await fs.readFile(file, "utf-8");
                const sfc = vueCompiler.parse(content);
                const { script } = sfc.descriptor;
                if (script) {
                    let content = script.content;
                    const sourceFile = project.createSourceFile(
                        file + ".ts",
                        content
                    );
                    sourceFiles.push(sourceFile);
                }
            } else if (file.endsWith(".ts")) {
                const sourceFile = project.addSourceFileAtPath(file);
                sourceFiles.push(sourceFile);
            }
        })
    );
    await project.emit({
        emitOnlyDtsFiles: true,
    });
    const tasks = sourceFiles.map(async (sourceFile: any) => {
        const emitOutput = sourceFile.getEmitOutput();
        const tasks = emitOutput.getOutputFiles().map(async (outputFile: any) => {
            const filepath = outputFile.getFilePath();
            await fs.mkdir(path.dirname(filepath), {
                recursive: true,
            });
            await fs.writeFile(filepath, pathRewriter("es")(outputFile.getText()));
        });
        await Promise.all(tasks);
    });
    await Promise.all(tasks);
}
export { genTypes };