/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

const { createPotFiles } = require( '@ckeditor/ckeditor5-dev-env' );
const {
	TRANSLATION_DIRECTORY_PATH,
	parseArguments,
	getCKEditor5SourceFiles,
	getCKEditor5PackagePaths,
	normalizePath
} = require( './utils' );

main();

function main() {
	const options = parseArguments( process.argv.slice( 2 ) );

	// `ckeditor5-utils` does not contain any translations. Hence, we can temporary skip it.
	// However. we need to align the AST parser to load TypeScript source code.

	return createPotFiles( {
		// An array containing absolute paths to CKEditor 5 source files.
		sourceFiles: getCKEditor5SourceFiles( options )
			.filter( fileName => {
				if ( fileName.includes( 'ckeditor5-utils' ) ) {
					return false;
				}

				return true;
			} ),

		// Packages to process.
		packagePaths: getCKEditor5PackagePaths( options )
			.filter( packagePath => {
				if ( packagePath.includes( 'ckeditor5-utils' ) ) {
					return false;
				}

				return true;
			} ),

		// A relative path to the `@ckeditor/ckeditor5-core` package where common translations are located.
		corePackagePath: 'packages/ckeditor5-core',

		// Where to save translation files.
		translationsDirectory: normalizePath( options.cwd, TRANSLATION_DIRECTORY_PATH )
	} );
}
