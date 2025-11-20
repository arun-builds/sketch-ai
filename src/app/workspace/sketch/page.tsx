"use client";

import { Tldraw, useEditor } from "tldraw";
import { useEffect } from "react";
import "tldraw/tldraw.css";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Tldraw>
        <CanvasListener />
      </Tldraw>
    </div>
  );
}

function CanvasListener() {
  const editor = useEditor();

  useEffect(() => {
    if (!editor) return;

    const snapshot = editor.getSnapshot();
    console.log("Snapshot:", snapshot);

    // Listen to any canvas changes
    const unsub = editor.store.listen(
      (update) => {
        console.log("Updated snapshot →", editor.getSnapshot());
      },
      { source: "user", scope: "document" }
    );

    return () => unsub();
  }, [editor]);

  return null;
}
