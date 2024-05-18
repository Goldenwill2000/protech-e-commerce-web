#!/bin/bash

# Define input and output directories
input_dir="full"

output_keys=("preload_thumb" "tiny" "small" "medium" "large")
output_values=(16 128 256 512 1024)

# Loop through each output directory, creating it if it doesn't exist, and processing the images
for ((i=0; i<${#output_keys[@]}; i++)); do
    output_dir="${output_keys[i]}"
    new_image_size="${output_values[i]}"
    mkdir -p "$output_dir"
    echo "Processing images for ${output_dir}..."

    # Loop through each image in the input directory
    for input_image in "$input_dir"/*.png; do
        # Get the filename without the path
        filename=$(basename "$input_image")
        
        # Get the dimensions of the original image using ffprobe
        dimensions=($(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "$input_image"))
        IFS=',' read -ra dim_array <<< "$dimensions"
        width="${dim_array[0]}"
        height="${dim_array[1]}"

        # Calculate the new dimensions while maintaining the aspect ratio
        if [ "$width" -ge "$height" ]; then
            new_width=$new_image_size
            new_height=$(($new_image_size * height / width))
        else
            new_height=$new_image_size
            new_width=$(($new_image_size * width / height))
        fi
        
        # Generate the resized image using ffmpeg
        output_image="$output_dir/$filename"
        ffmpeg -y -i "$input_image" -pix_fmt "rgba" -vf "scale=$new_width:$new_height" -c:v "png" -strict "-1" -compression_level "100" "$output_image"
        
        echo "Processed: $filename"
        
        # Generate and save base64-encoded image for "preload_thumb" directory
        if [ "$output_dir" = "preload_thumb" ]; then
            mkdir -p "base64"
            base64_image="$(base64 -i "$output_image")"  # Use -w 0 to disable line wrapping
            echo "My base64 image:"
            echo base64_image
            echo "----"
            echo "const value = \"$base64_image\";export default value;" > "base64/${filename%.*}.js"
        fi
    done
done

echo "Image processing complete!"
