package main

import (
	"flag"
	"fmt"
	"path/filepath"

	"github.com/tkrajina/gpxgo/gpx"
)

func main() {
	// fmt.Println("Hello banana gpx")

	flag.Parse()

	args := flag.Args()
	if len(args) != 1 {
		fmt.Println("Please provide a GPX file path!")
		return
	}

	gpxFileArg := args[0]
	gpxFile, err := gpx.ParseFile(gpxFileArg)

	if err != nil {
		fmt.Println("Error opening gpx file: ", err)
		return
	}

	gpxPath, _ := filepath.Abs(gpxFileArg)

	fmt.Print("File: ", gpxPath, "\n")

	// fmt.Println(gpxFile.GetGpxInfo())
	fmt.Println(gpx.GetGpxElementInfo("", gpxFile))
	fmt.Println(gpxFile.Length3D())
}
