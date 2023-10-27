import React from "react";
import { GrapesjsReact } from "grapesjs-react";
import "grapesjs-preset-newsletter";
import "grapesjs-plugin-forms";
import thePlugin from "grapesjs-plugin-export";
import pluginTooltip from "grapesjs-tooltip";
import ErrorBoundary from "./ErrorBoundary"; // Import your ErrorBoundary component

const Primary = () => {
  const handleEditorInit = (editor) => {
    window.editor = editor;
  };

  const editorPlugins = [
    "gjs-preset-newsletter",
    "gjs-blocks-basic",
    "grapesjs-plugin-export",
    (editor) => thePlugin(editor, {}),
    (editor) => pluginTooltip(editor, {
      // options
    })
  ];

  return (
    <ErrorBoundary> {/* Wrap the component with the error boundary */}
      <GrapesjsReact
        id="grapesjs-react"
        plugins={editorPlugins}
        onInit={handleEditorInit}
      />
    </ErrorBoundary>
  );
};

export default Primary;
