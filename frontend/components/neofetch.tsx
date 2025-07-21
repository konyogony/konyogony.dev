'use client';
import { useState } from 'react';
import { Stats } from '@/lib/types';

// @format
// prettier-ignore
export const Neofetch = () => {
    const [data, setData] = useState<Stats>()
    return (
        <pre className='leading-tight whitespace-pre overflow-visible'>
            <span className='text-cyan-400'>                   -`                     ​​ ​ ​ ​ ​ ​ ​​ kony</span>
            <span className='text-white'>@</span>
            <span className='text-cyan-400'>ogony</span>{'\n'}
            <span className='text-cyan-400'>                  .o+`</span>
            <span className='text-white'>                   ┌───────────────────────────────┐</span>{'\n'}
            <span className='text-cyan-400'>                 `ooo/</span>
            <span className='text-white'>                    Operating System</span>{'\n'}
            <span className='text-cyan-400'>                `+oooo:</span>
            <span className='text-white'>                   </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> Arch Linux</span>{'\n'}
            <span className='text-cyan-400'>               `+oooooo:</span>
            <span className='text-white'>                  </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> kitty</span>{'\n'}
            <span className='text-cyan-400'>               -+oooooo+:</span>
            <span className='text-white'>                 </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> zsh</span>{'\n'}
            <span className='text-cyan-400'>             `/:-:++oooo+:</span>
            <span className='text-white'>                </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> 6.15.7-arch1-1</span>{'\n'}
            <span className='text-cyan-400'>            `/++++/+++++++:</span>
            <span className='text-white'>               </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> 1186 (pacman)</span>{'\n'}
            <span className='text-cyan-400'>           `/++++++++++++++:</span>
            <span className='text-white'>              Hardware</span>{'\n'}
            <span className='text-cyan-400'>          `/+++ooooooooooooo/`</span>
            <span className='text-white'>            </span>
            <span className='text-cyan-400'>{'  '}󰍛 &gt; </span>
            <span className='text-white'> 12th Gen i5-12600KF [52.0°on]</span>{'\n'}
            <span className='text-cyan-400'>         ./ooosssso++osssssso+`</span>
            <span className='text-white'>           </span>
            <span className='text-cyan-400'>{'  '} &gt; </span>
            <span className='text-white'> GeForce RTX 3060 Lite Hash Rate</span>{'\n'}
            <span className='text-cyan-400'>        .oossssso-````/ossssss+`</span>
            <span className='text-white'>          </span>
            <span className='text-cyan-400'>{'  '}󰑭 &gt; </span>
            <span className='text-white'> 9.33GiB / 31.17GiB (29%)</span>{'\n'}
            <span className='text-cyan-400'>       -osssssso.      :ssssssso.</span>
            <span className='text-white'>         </span>
            <span className='text-cyan-400'>{'  '}󰍹 &gt; </span>
            <span className='text-white'> 2560x1440</span>{'\n'}
            <span className='text-cyan-400'>      :osssssss/        osssso+++.</span>
            <span className='text-white'>        ETC</span>{'\n'}
            <span className='text-cyan-400'>     /ossssssss/        +ssssooo/-</span>
            <span className='text-white'>        </span>
            <span className='text-cyan-400'>{'  '}󰝚 &gt; </span>
            <span className='text-white'> Liner - The Cranberries</span>{'\n'}
            <span className='text-cyan-400'>   `/ossssso+/:-        -:/+osssso+-</span>
            <span className='text-white'>      </span>
            <span className='text-cyan-400'>{'  '}󰋊 &gt; </span>
            <span className='text-white'> (/) 143G / 191G (80%)</span>{'\n'}
            <span className='text-cyan-400'>  `+sso+:-`                 `.-/+oso:</span>
            <span className='text-white'>    └───────────────────────────────┘</span>{'\n'}
            <span className='text-cyan-400'> `++:.                           `-/+/</span>{'\n'}
            <span className='text-cyan-400'> .`                                 `/</span>
        </pre>
    )
}
