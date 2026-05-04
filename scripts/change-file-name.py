from pathlib import Path

# Path to the base directory
root_dir = Path('./assets/images')

for file_path in root_dir.rglob('*'):
    if file_path.is_file():
        # Get the new path with a lowercase name
        new_path = file_path.with_name(file_path.name.lower())
        
        # Rename only if name changes to avoid errors
        if file_path != new_path:
            file_path.rename(new_path)
            print(f"Renamed: {file_path.name} -> {new_path.name}")
