import { Box, HStack } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, type Language } from "@/constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<Language>("javascript");

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
      <HStack>
        <Box w={"50%"}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language as Language]}
            value={value}
            onMount={onMount}
            onChange={(val) => setValue(val!)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
