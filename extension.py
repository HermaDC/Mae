from tkinter import filedialog
from PIL import Image
from PIL.ExifTags import TAGS

def select_and_process_images():
    # Seleccionar múltiples imágenes desde el sistema
    file_paths = filedialog.askopenfilenames(
        filetypes=[("Imágenes", "*.jpg *.jpeg *.png *.bmp *.tiff")],
        title="Selecciona una o más imágenes"
    )
    if file_paths:
        save_directory = filedialog.askdirectory(title="Selecciona la carpeta para guardar las imágenes redimensionadas")
        if save_directory:
            process_images(file_paths, save_directory)

def process_images(paths, directory):
    try:
        for i in paths:
            image = Image.open(i)
            new_image = image.resize((1200, 800), Image.BOX)
            filename = i.split("/")[-1].split("\\")[-1]
            save_path = f"{directory}/{filename.rsplit('.', 1)[0]}.webp"
            new_image.save(save_path, "webp")
    except Exception as e:
        print(f"Error: {e}")

select_and_process_images()