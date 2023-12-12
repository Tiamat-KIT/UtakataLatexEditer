"use client"
import { EditorContent,EditorProvider,useCurrentEditor,useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit"
import { useCallback, useRef } from "react";
import Toolbar from "./editor-toolbar";

export default function Editor(){
    const InputContentRef = useRef<string>("<p>Hello World</p>")

    return (
        <div className="w-2/3 mt-10 mx-auto border-gray-500 border-2">
            
            <div className="p-3 overflow-y-scroll h-[70vh] overflow-hidden mt-3">
                <EditorProvider 
                    slotBefore={<Toolbar />}
                    extensions={[StarterKit]}
                    content={InputContentRef.current}
                    editorProps={{
                        attributes: {
                            class: "prose prose-base m-5 focus:outline-none text-left",
                        }
                    }}>
                        これで何ができんだろ
                    </EditorProvider>
            </div>
        </div>
    )
}