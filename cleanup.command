cd "$(dirname "$0")"

jam-bower(){
	CURRENT_DIR=`pwd`

	if [[ CURRENT_DIR =~ "bower_components" ]]
	then
	    mv * cd ../../
		
		# Go to root dir
		cd ../..
		
		# Remove bower directories
		rm -r bower_components	
	fi
}

jam-cleanup(){
	rm .bower.json
	rm bower.json
	rm readme.md
	rm mixin.md
}

jam-finish(){
	rm cleanup.command
}

jam-bower && jam-cleanup && jam-finish