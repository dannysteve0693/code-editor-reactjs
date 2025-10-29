import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, type Language } from "@/constants";

const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang: Language) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue="// some comment"
        value={value}
        onMount={onMount}
        onChange={(val) => setValue(val!)}
      />
    </Box>
  );
};

export default CodeEditor;
