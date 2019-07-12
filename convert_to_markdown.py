#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jan 23 18:32:55 2019

@author: debboutr
"""

import os
os.getcwd()
f = open("hundredth_monkey.txt", "r")
contents = f.read()
print (contents)

a=contents.split("/**/")
a[3]

a = a[3:-1]
size = 47

count = 5
for x in a:
#    break
    big = f'<span style="font-size:{size}px;">{x[4]}</span>'
    s =  ''.join((x[:4],big,x[5:]))
    if x[4] == '"':
#        break
        big = f'<span style="font-size:{size}px;">{x[4:6]}</span>'
        s =  ''.join((x[:4],big,x[6:]))
    
#    print(s)
    msg = ''
    if '+NUCLEAR' in s:
#        break
        split = s.split('+NUCLEAR WAR IS BAD FOR')
        s=split[0]
        msg = split[1].replace('\n','') # new, should remove the newline in msg
    final = f"---\nprevious: '/page-{count-1}'\nnext: '/page-{count+1}'\nmonkey_msg: '{msg}'\n---\n{s}"
    txt = open(f"md/page-{count}.md","w")
    txt.write(final)
    txt.close()
    count += 1      
