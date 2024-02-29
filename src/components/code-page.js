'use client'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-jsx'

import homeCode from "@/code/home-code";

export default function CodePage() {
    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");

    const code = homeCode

    return (
        <div className="w-100">
            <Editor
                value={code}
                highlight={code => hightlightWithLineNumbers(code, languages.jsx)}
                padding={10}
                className="editor"
                readOnly={true}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    outline: 0
                }}
            />
        </div>
    )
}