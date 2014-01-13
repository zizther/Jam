#echo "$(dirname "$0")"


rm bower.json


# && jam-finish


jam-cleanup(){
    # 1. Make sure I am in the 'Sites' directory.
    # 2. Install the Maido FE package.
    # 3. Call the fe-clean function to sort the directory settings.
    cd ~/Documents/Sites && bower install jam && fe-clean
    
    #mv bower_components/jam/* $DIRECTORY/

	# Remove unnessesary files
	#cd $DIRECTORY
	#rm .bower.json
	#rm bower.json
	#rm readme.md
	
	# Move to parent directory to complete process
	#cd ..
}

jam-finish(){
	#rm cleanup.command
}