'use client';

import { useState } from 'react';
import { Bold, Italic, List, Code, Image, Link as LinkIcon } from 'lucide-react';
import { cn } from '@lib/utils';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichEditor({ value, onChange, placeholder }: EditorProps) {
  const [isFocused, setIsFocused] = useState(false);

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText =
      value.substring(0, start) +
      before +
      selectedText +
      after +
      value.substring(end);

    onChange(newText);

    setTimeout(() => {
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
      textarea.focus();
    }, 0);
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center space-x-1 border-b border-border bg-muted p-2">
        <button
          onClick={() => insertMarkdown('**', '**')}
          className="p-2 text-foreground/70 hover:bg-background rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => insertMarkdown('_', '_')}
          className="p-2 text-foreground/70 hover:bg-background rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-border" />
        <button
          onClick={() => insertMarkdown('- ')}
          className="p-2 text-foreground/70 hover:bg-background rounded transition-colors"
          title="List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => insertMarkdown('```\n', '\n```')}
          className="p-2 text-foreground/70 hover:bg-background rounded transition-colors"
          title="Code"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={() => insertMarkdown('[Link](url)')}
          className="p-2 text-foreground/70 hover:bg-background rounded transition-colors"
          title="Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Editor */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={cn(
          'w-full p-4 bg-background text-foreground font-mono text-sm resize-none focus:outline-none min-h-96',
          'placeholder:text-foreground/40'
        )}
      />
    </div>
  );
}
