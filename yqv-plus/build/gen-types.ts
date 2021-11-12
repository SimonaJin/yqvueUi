import { buildConfig } from './utils/config';
import { Project,ModuleKind,ScriptTarget,SourceFile} from 'ts-morph';
import { outDir, zpRoot, projectRoot } from './utils/paths';
import glob from 'fast-glob';
import path from 'path';
import fs from 'fs/promises';
import { series,parallel } from 'gulp';
import {withTaskName,run} from './utils/index';
export const genEntryTypes = async () => {
  const files = await glob("*.ts", {
    cwd: zpRoot,
    absolute: true,
    onlyFiles: true,
  });
  const project = new Project({
    compilerOptions: {
      declaration: true,
      module: ModuleKind.ESNext,//ModuleKind
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(outDir, "entry/types"),
      target: ScriptTarget.ESNext,
      rootDir: zpRoot,
      strict: false,
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });
  const sourceFiles: SourceFile[] = [];
  files.map((f) => {
    const sourceFile = project.addSourceFileAtPath(f);
    sourceFiles.push(sourceFile);
  });
  await project.emit({
    emitOnlyDtsFiles: true,
  });
  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), { recursive: true });
      await fs.writeFile(
        filepath,
        outputFile.getText().replace("@yqv-plus", "."),
        "utf8"
      );
    }
  });
  await Promise.all(tasks);
};
export const copyEntryTypes = () => {
	const src = path.resolve(outDir, "entry/types");
	const copy = (module) =>
			parallel(
					withTaskName(`copyEntryTypes:${module}`, () =>
							run(
									`cp -r ${src}/* ${path.resolve(
											outDir,
											buildConfig[module].output.path
									)}/`
							)
					)
			);
	return parallel(copy("esm"), copy("cjs"));
}
export const genTypes = series(genEntryTypes,copyEntryTypes())