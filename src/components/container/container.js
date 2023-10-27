import { useEffect } from "react";
import grapesjs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.mjs'
import websitePlugin from 'grapesjs-preset-webpage';
import formPlugin from 'grapesjs-plugin-forms';
import '@fortawesome/fontawesome-free/css/all.css'; // Imports all icons
import "bootstrap/dist/css/bootstrap.min.css"
// import {timerPluginRef} from "./timer/consts";
//import addTimerPlugin from './timer';

function Container() {
    useEffect(() => {
        var editor = grapesjs.init({
            container: '#gjs',
            width: '100%',
            plugins: [websitePlugin, formPlugin],
            deviceManager: {
                devices:
                    [
                        {
                            id: 'desktop',
                            name: 'Desktop',
                            width: '',
                        },
                        {
                            id: 'tablet',
                            name: 'Tablet',
                            width: '768px',
                            widthMedia: '992px',
                        },
                        {
                            id: 'mobilePortrait',
                            name: 'Mobile portrait',
                            width: '320px',
                            widthMedia: '575px',
                        },
                    ]
            },
        })

        // Define and add a custom block (2 column) to the side panel
        editor.BlockManager.add('2-column', {
            category: 'Columns',
            label: '2 Column',
            content: `
                     <div class="row">
            <div class="col-md-6" data-gjs-type="default" data-highlightable="1">Column 1</div>
            <div class="col-md-6" data-gjs-type="default" data-highlightable="1">Column 2</div>
        </div>
         `,
            attributes: { class: 'fas fa-columns fa-2x' },
        });

        // Define and add a custom block (3 column) to the side panel
        editor.BlockManager.add('3-column', {
            category: 'Columns',
            label: '3 Column',
            content: `
                    <div class="row">
                        <div class="col">
                        Column
                        </div>
                        <div class="col">
                        Column
                        </div>
                        <div class="col">
                        Column
                        </div>
                    </div>
         `,
            attributes: { class: 'fas fa-columns fa-2x' },
        });

        // Define and add a custom block (2 column(2/3)) to the side panel
        editor.BlockManager.add('2 column(2/3)', {
            category: 'Columns',
            label: '2/3 Column',
            content: `
             <div class="row">
            <div class="col-md-8" data-gjs-type="default" data-highlightable="1">Column 1</div>
            <div class="col-md-4" data-gjs-type="default" data-highlightable="1">Column 2</div>
        </div>
        `,
            attributes: { class: 'fas fa-columns fa-2x' },
        });

        // // Define and add a custom block (Link) to the side panel
        // editor.BlockManager.add('link', {
        //     category: 'Links',
        //     label: 'Link',
        //     content: `<a data-gjs-type="link" draggable="true" data-highlightable="1" id="inaf" class="">Link</a>`,
        //     attributes: { class: 'fas fa-link fa-2x' },
        // });

        // Define and add a custom block (Image) to the side panel
        editor.BlockManager.add('image', {
            category: 'Media',
            label: 'Image',
            content: `
        <img src="path-to-image.jpg" alt="Image" data-gjs-type="image" data-highlightable="1">
    `,
            attributes: { class: 'fas fa-image fa-2x' },
        });

        // Define and add a custom block (Map) to the side panel
        editor.BlockManager.add('map', {
            category: 'Media',
            label: 'Map',
            content: `
        <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    `,
            attributes: { class: 'fas fa-map-marker fa-2x' },
        });


        // // Define and add a custom block (Text Section) to the side panel
        // editor.BlockManager.add('text-section', {
        //     category: 'Extra',
        //     label: 'Text Section',
        //     content: `<section data-gjs-type="default" draggable="true" data-highlightable="1" class="bdg-sect" id="ik5yc"><h1 data-gjs-type="text" draggable="true" data-highlightable="1" class="heading-of-textsection" id="ik8li">Insert title here</h1><p data-gjs-type="text" draggable="true" data-highlightable="1" class="paragraph" id="ibj7t">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></section>`,
        //     attributes: { class: 'fas fa-text-width fa-2x' }
        // });

        // Define and add a custom block (Quotes) to the side panel
        //     editor.BlockManager.add('quotes', {
        //         category: 'Extra',
        //         label: 'Quotes',
        //         content: `<blockquote data-gjs-type="text" draggable="false" data-highlightable="1" class="quote gjs-selected" id="i1ljk" contenteditable="true">
        //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
        //   </blockquote>`,
        //         attributes: { class: 'fa-solid fa-quote-left fa-2x', }
        //     });
        // Define and add a custom block (Countdown) to the side panel
        editor.BlockManager.add('countdown', {
            category: 'Extra',
            label: 'Countdown',
            content: `
               <style>
                    .countdown {
                    display:block;
                    text-align: center;
                    font-family: Helvetica, serif;
                }
                .countdown-digit {
                    font-size: 5rem;
                }
                .countdown-cont {
                    display: inline-block;
                }
                </style>
                <div data-gjs-type="countdown" draggable="true" data-highlightable="1" class="countdown" id="iepg">
                    <span data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown" class="countdown-cont" id="i0l5">
                        <div data-gjs-type="default" draggable="true" data-highlightable="1" class="countdown-block" id="iu9d">
                            <div data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown-day" class="countdown-digit gjs-selected" id="iu8u">00</div>
                            <div data-gjs-type="text" draggable="true" data-highlightable="1" class="countdown-label" id="i0m4">days</div>
                        </div>
                        <div data-gjs-type="default" draggable="true" data-highlightable="1" class="countdown-block" id="iyrg">
                            <div data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown-hour" class="countdown-digit" id="ir5ap">00</div>
                            <div data-gjs-type="text" draggable="true" data-highlightable="1" class="countdown-label" id="i8bbv">hours</div>
                        </div>
                        <div data-gjs-type="default" draggable="true" data-highlightable="1" class="countdown-block" id="ixnpt">
                            <div data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown-minute" class="countdown-digit" id="iwhpk">00</div>
                            <div data-gjs-type="text" draggable="true" data-highlightable="1" class="countdown-label" id="i6o9e">minutes</div>
                        </div>
                        <div data-gjs-type="default" draggable="true" data-highlightable="1" class="countdown-block" id="ifdoi">
                            <div data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown-second" class="countdown-digit" id="i3hd8">00</div>
                            <div data-gjs-type="text" draggable="true" data-highlightable="1" class="countdown-label" id="ic1r5">seconds</div>
                        </div>
                    </span>
                    <span data-gjs-type="default" draggable="true" data-highlightable="1" data-js="countdown-endtext" class="countdown-endtext" id="imkfw"></span>
                </div>
            `,
            attributes: { class: 'fa-solid fa-clock-o fa-2x', }
        });
        // Define and add a custom block (Navbar) to the side panel
        editor.BlockManager.add('navbar', {
            category: 'Extra',
            label: 'Navbar',
            content: `
                <style>
                    .navbar {
                        background-color: #007BFF;
                        color: #fff;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                    }

                    .navbar a {
                        color: #fff;
                        margin: 0 10px;
                    }
                </style>
                <nav class="navbar">
                    <a class="navbar-brand" href="#">My Website</a>
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Services</a>
                    <a class="nav-link" href="#">Contact</a>
                </nav>
            `,
            attributes: { class: 'fa fa-bars fa-2x', }
        });

        editor.BlockManager.add('text', {
            category: 'Forms',
            label: 'Text',
            content: '<div data-gjs-type="text" draggable="false" data-highlightable="1" id="ibh6" contenteditable="true" class="">Insert your text here</div>',
            attributes: { class: 'fas fa-t fa-2x' },
        });

    }, [])
    return (

        <div id="gjs"></div>

    );

}



export default Container;