/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Files, Search, GitBranch, Play, LayoutGrid, User, Settings,
  ChevronDown, ChevronRight, Folder, FileJson, Info, X,
  Bell, AlertTriangle, XCircle, Check, Plus, Trash2, Hash
} from 'lucide-react';

const CodeLine = ({ num, children }: { num: number, children: React.ReactNode }) => (
  <div className="flex leading-6">
    <div className="w-12 text-right pr-6 text-[#858585] select-none">{num}</div>
    <div className="whitespace-pre">{children}</div>
  </div>
);

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#1e1e1e] text-[#cccccc] font-sans overflow-hidden">
      {/* Main Area */}
      <div className="flex-1 flex min-h-0">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-3 justify-between shrink-0">
          <div className="flex flex-col space-y-6 text-[#858585]">
            <div className="relative text-white cursor-pointer">
              <Files size={24} strokeWidth={1.5} />
              <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-white"></div>
            </div>
            <Search size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
            <GitBranch size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
            <Play size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
            <LayoutGrid size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col space-y-6 text-[#858585]">
            <User size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
            <Settings size={24} strokeWidth={1.5} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Sidebar (Explorer) */}
        <div className="w-64 bg-[#252526] flex flex-col shrink-0 border-r border-[#333333]">
          <div className="h-9 flex items-center px-4 text-[11px] text-[#cccccc] tracking-wider">
            EXPLORER
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center px-1 py-1 cursor-pointer hover:bg-[#2a2d2e] text-white font-bold text-[11px] tracking-wider">
              <ChevronDown size={16} className="mr-1" />
              MY-AWESOME-PROJECT
            </div>
            
            <div className="flex flex-col text-[13px]">
              {/* src folder */}
              <div className="flex items-center px-4 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                <ChevronDown size={16} className="mr-1 text-[#cccccc]" />
                <Folder size={16} className="mr-1.5 text-[#dcb67a]" fill="#dcb67a" />
                <span>src</span>
              </div>
              
              {/* index.js */}
              <div className="flex items-center pl-10 pr-4 py-1 cursor-pointer bg-[#37373d] text-white">
                <span className="text-[#e3c23e] font-bold text-[10px] mr-2">JS</span>
                <span>index.js</span>
              </div>
              
              {/* styles.css */}
              <div className="flex items-center pl-10 pr-4 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                <Hash size={14} className="mr-2 text-[#42a5f5]" />
                <span>styles.css</span>
              </div>
              
              {/* public folder */}
              <div className="flex items-center px-4 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                <ChevronRight size={16} className="mr-1 text-[#cccccc]" />
                <Folder size={16} className="mr-1.5 text-[#dcb67a]" fill="#dcb67a" />
                <span>public</span>
              </div>
              
              {/* README.md */}
              <div className="flex items-center px-6 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                <Info size={14} className="mr-2 text-[#42a5f5]" />
                <span>README.md</span>
              </div>
              
              {/* package.json */}
              <div className="flex items-center px-6 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                <FileJson size={14} className="mr-2 text-[#e3c23e]" />
                <span>package.json</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editor & Terminal Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
          {/* Editor Tabs */}
          <div className="flex bg-[#252526] h-9 overflow-x-auto no-scrollbar shrink-0">
            <div className="flex items-center px-3 bg-[#1e1e1e] text-white border-t border-[#007acc] min-w-[120px] cursor-pointer">
              <span className="text-[#e3c23e] font-bold text-[10px] mr-2">JS</span>
              <span className="text-[13px] mr-2">index.js</span>
              <X size={14} className="ml-auto text-[#858585] hover:text-[#cccccc] hover:bg-[#333333] rounded p-[1px]" />
            </div>
            <div className="flex items-center px-3 bg-[#2d2d2d] text-[#969696] border-r border-[#252526] min-w-[120px] cursor-pointer hover:bg-[#2b2b2b]">
              <Hash size={14} className="mr-2 text-[#42a5f5]" />
              <span className="text-[13px] mr-2">styles.css</span>
            </div>
            <div className="flex items-center px-3 bg-[#2d2d2d] text-[#969696] border-r border-[#252526] min-w-[120px] cursor-pointer hover:bg-[#2b2b2b]">
              <Info size={14} className="mr-2 text-[#42a5f5]" />
              <span className="text-[13px] mr-2">README.md</span>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center px-4 h-6 text-[12px] text-[#cccccc] shrink-0 border-b border-[#1e1e1e] shadow-[0_1px_2px_rgba(0,0,0,0.2)] z-10">
            <span>my-awesome-project</span>
            <ChevronRight size={14} className="mx-1" />
            <span>src</span>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#e3c23e] font-bold text-[10px] mr-1">JS</span>
            <span>index.js</span>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto py-2 font-mono text-[14px]">
            <CodeLine num={1}>
              <span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span><span className="text-[#cccccc]">;</span>
            </CodeLine>
            <CodeLine num={2}>
              <span className="text-[#c586c0]">import</span> <span className="text-[#cccccc]">{`{`}</span> <span className="text-[#9cdcfe]">useState</span> <span className="text-[#cccccc]">{`}`}</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span><span className="text-[#cccccc]">;</span>
            </CodeLine>
            <CodeLine num={3}>{''}</CodeLine>
            <CodeLine num={4}>
              <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">App</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">()</span> <span className="text-[#569cd6]">=&gt;</span> <span className="text-[#cccccc]">{`{`}</span>
            </CodeLine>
            <CodeLine num={5}>
              <span className="text-[#cccccc]">  </span><span className="text-[#569cd6]">const</span> <span className="text-[#cccccc]">[</span><span className="text-[#4fc1ff]">count</span><span className="text-[#cccccc]">, </span><span className="text-[#dcdcaa]">setCount</span><span className="text-[#cccccc]">] = </span><span className="text-[#dcdcaa]">useState</span><span className="text-[#cccccc]">(</span><span className="text-[#b5cea8]">0</span><span className="text-[#cccccc]">);</span>
            </CodeLine>
            <CodeLine num={6}>{''}</CodeLine>
            <CodeLine num={7}>
              <span className="text-[#cccccc]">  </span><span className="text-[#c586c0]">return</span> <span className="text-[#cccccc]">(</span>
            </CodeLine>
            <CodeLine num={8}>
              <span className="text-[#cccccc]">    &lt;</span><span className="text-[#569cd6]">div</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"container mx-auto p-4"</span><span className="text-[#cccccc]">&gt;</span>
            </CodeLine>
            <CodeLine num={9}>
              <span className="text-[#cccccc]">      &lt;</span><span className="text-[#569cd6]">h1</span> <span className="text-[#9cdcfe]">className</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">"text-2xl font-bold"</span><span className="text-[#cccccc]">&gt;</span><span className="text-[#cccccc]">Hello World</span><span className="text-[#cccccc]">&lt;/</span><span className="text-[#569cd6]">h1</span><span className="text-[#cccccc]">&gt;</span>
            </CodeLine>
            <CodeLine num={10}>
              <span className="text-[#cccccc]">      &lt;</span><span className="text-[#569cd6]">button</span> <span className="text-[#9cdcfe]">onClick</span><span className="text-[#d4d4d4]">=</span><span className="text-[#cccccc]">{`{`}</span><span className="text-[#569cd6]">()</span> <span className="text-[#569cd6]">=&gt;</span> <span className="text-[#dcdcaa]">setCount</span><span className="text-[#cccccc]">(</span><span className="text-[#4fc1ff]">count</span> <span className="text-[#d4d4d4]">+</span> <span className="text-[#b5cea8]">1</span><span className="text-[#cccccc]">{`)}`}</span><span className="text-[#cccccc]">{`}`}</span><span className="text-[#cccccc]">&gt;</span>
            </CodeLine>
            <CodeLine num={11}>
              <span className="text-[#cccccc]">        Count: {`{`}</span><span className="text-[#4fc1ff]">count</span><span className="text-[#cccccc]">{`}`}</span>
            </CodeLine>
            <CodeLine num={12}>
              <span className="text-[#cccccc]">      &lt;/</span><span className="text-[#569cd6]">button</span><span className="text-[#cccccc]">&gt;</span>
            </CodeLine>
            <CodeLine num={13}>
              <span className="text-[#cccccc]">    &lt;/</span><span className="text-[#569cd6]">div</span><span className="text-[#cccccc]">&gt;</span>
            </CodeLine>
            <CodeLine num={14}>
              <span className="text-[#cccccc]">  );</span>
            </CodeLine>
            <CodeLine num={15}>
              <span className="text-[#cccccc]">{`}`}</span><span className="text-[#cccccc]">;</span>
            </CodeLine>
            <CodeLine num={16}>{''}</CodeLine>
            <CodeLine num={17}>
              <span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">default</span> <span className="text-[#4fc1ff]">App</span><span className="text-[#cccccc]">;</span>
            </CodeLine>
          </div>

          {/* Terminal Panel */}
          <div className="h-64 bg-[#1e1e1e] border-t border-[#333333] flex flex-col shrink-0">
            <div className="flex items-center justify-between px-4 h-9">
              <div className="flex space-x-6 text-[11px] font-medium tracking-wide">
                <button className="text-[#e7e7e7] border-b border-[#e7e7e7] pb-1">TERMINAL</button>
                <button className="text-[#858585] hover:text-[#e7e7e7]">OUTPUT</button>
                <button className="text-[#858585] hover:text-[#e7e7e7]">PROBLEMS</button>
                <button className="text-[#858585] hover:text-[#e7e7e7]">DEBUG CONSOLE</button>
              </div>
              <div className="flex items-center space-x-3 text-[#858585]">
                <Plus size={14} className="hover:text-[#e7e7e7] cursor-pointer" />
                <Trash2 size={14} className="hover:text-[#e7e7e7] cursor-pointer" />
                <X size={14} className="hover:text-[#e7e7e7] cursor-pointer" />
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-[13px] text-[#cccccc] overflow-auto">
              <div className="flex items-center text-[#4af626]">
                <span className="mr-2">➜</span>
                <span className="text-[#4fc1ff]">my-awesome-project</span>
                <span className="text-[#cccccc] ml-2">$ npm start</span>
              </div>
              <div className="mt-2 text-[#cccccc]">
                &gt; my-awesome-project@0.1.0 start<br/>
                &gt; react-scripts start
              </div>
              <div className="mt-4 text-[#4af626]">
                Compiled successfully!
              </div>
              <div className="mt-4 text-[#cccccc]">
                You can now view my-awesome-project in the browser.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-[22px] bg-[#007acc] text-white flex justify-between items-center px-2 text-[11px] shrink-0">
        <div className="flex items-center space-x-3">
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded">
            <GitBranch size={12} className="mr-1" />
            <span>main*</span>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded space-x-1">
            <XCircle size={12} />
            <span>0</span>
            <AlertTriangle size={12} className="ml-1" />
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded">Spaces: 2</span>
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded">UTF-8</span>
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded">
            <Check size={12} className="mr-1" />
            <span>Prettier</span>
          </div>
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded">JavaScript</span>
          <Bell size={12} className="cursor-pointer hover:bg-white/20 rounded" />
        </div>
      </div>
    </div>
  );
}
