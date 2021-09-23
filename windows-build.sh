cd recordreplay
cd gecko-dev
./mach build || { "./mach build failed, exiting."; exit 1; }
# ./mach package
exit
