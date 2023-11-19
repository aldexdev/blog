import type { ReactNode } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Snippet({ children }: { children: ReactNode }) {
  return (
    <div className="my-6">
      <pre className="p-4 text-sm bg-gray-800 text-white dark:bg-[#222] dark:text-white">
        {children}
      </pre>
    </div>
  );
}
