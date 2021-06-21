/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import FindAndReplace from '../../src/findandreplace';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';

// Note: We need to load paragraph because we don't have inline editors yet.
ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Paragraph, FindAndReplace, Highlight, Bold ],
		toolbar: [ 'undo', 'redo', 'highlight', 'bold', 'findAndReplace' ]
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
