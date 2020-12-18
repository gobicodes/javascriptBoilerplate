#!/bin/bash
echo "Starting dependencies setup for dev env"
find ./workspaces -depth -type d -name 'csp_bin_release*' -prune -exec rm -rf {} +

for f in workspaces/*; do
echo $f
 if [[ -d "$f" && ! -L "$f" ]]; then
 if [ "$f" = "workspaces/commons" ]; then continue; 
 else
 
 if [ -d "$f/csp_bin_release" ]; then
 continue;

 else
 mkdir -p $f/csp_bin_release;
 cp -R workspaces/commons/* $f/csp_bin_release/;
 fi
 fi
 fi
 if [[ "$f" = "*" ]]; then continue; fi 
done


echo "Dependencies setup for dev env is done"