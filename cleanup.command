#!/bin/sh
directory="`dirname \"$0\"`"
cd "$directory"

jamBower(){
	if [[ "$PWD" =~ bower_components ]]
	then
	    mv * cd ../../
		
		# Go to root dir
		cd ../..
		
		# Remove bower directories
		rm -r bower_components	
	fi
}
jamCleanup(){
	rm bower.json
	rm readme.md
	rm mixin.md
}
jamFinish(){
	rm cleanup.command
}
jamBower && jamCleanup && jamFinish