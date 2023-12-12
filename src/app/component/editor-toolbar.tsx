"use client"
import { Editor, useCurrentEditor } from "@tiptap/react";

export default function Toolbar(){
    const {editor} = useCurrentEditor()
    if(!editor){
        return null
    }
    function ToolButton({category,editor}:{category: "bold",editor: Editor}){
        
        return (
            <button 
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "badge badge-neutral" : "badge"}>
                {category}
            </button>
        )
    }
    return (
        <>
            <ToolButton 
                category="bold" 
                editor={editor} 
            />
        </>
    )
}