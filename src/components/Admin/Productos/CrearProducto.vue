<template>
    <section id="usuarios" class="section-light">
        <div class="container">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <h2 class="text-center">Registro de productos</h2>
                        </div>
                        <div class="col-12 col-sm-12 mt-5">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-12">
                                        <div class="form-group">
                                            <label for="image" class="ml-2">Imagen del producto</label>
                                            <div class="drop-zone">
                                                <span class="drop-zone__prompt">Arrastra el archivo o haz click para
                                                    subirlo</span>
                                                <input type="file" id="image" name="image"
                                                    class="form-control drop-zone__input" style="display: none;">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Nombre del producto</label>
                                            <input type="text" name="name" id="name" placeholder="Nombre"
                                                class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="role">Tipo de producto</label>
                                            <select class="form-control" type="text" id="role" name="role" required>
                                                <option value="">Seleccionar tipo de producto</option>
                                                <option value="Sabor">Sabor</option>
                                                <option value="Adorno">Adorno</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Precio del producto</label>
                                            <input type="text" name="price" id="price" placeholder="Precio"
                                                class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="description">Descripción del producto</label>
                                            <textarea type="text" id="description" name="description"
                                                rows="5" placeholder="Descripción" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="stock">Existencias</label>
                                            <input type="text" name="stock" id="stock" placeholder="Existencias"
                                                class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <slot></slot>
                                            <button type="button" class="btn btn-success btn-block">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CrearProducto',
    mounted() {
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".drop-zone");
            dropZoneElement.addEventListener("click", (e) => {
                inputElement.click();
            });
            inputElement.addEventListener("change", (e) => {
                if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
                }
            });
            dropZoneElement.addEventListener("dragover", (e) => {
                e.preventDefault();
                dropZoneElement.classList.add("drop-zone--over");
            });
            ["dragleave", "dragend"].forEach((type) => {
                dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
                });
            });
            dropZoneElement.addEventListener("drop", (e) => {
                e.preventDefault();
                if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                console.log(inputElement.files);
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
                }
                dropZoneElement.classList.remove("drop-zone--over");
            });
        });
        function updateThumbnail(dropZoneElement, file) {
            let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
            if (dropZoneElement.querySelector(".drop-zone__prompt")) {
                dropZoneElement.querySelector(".drop-zone__prompt").remove();
            }
            if (!thumbnailElement) {
                thumbnailElement = document.createElement("div");
                thumbnailElement.classList.add("drop-zone__thumb");
                dropZoneElement.appendChild(thumbnailElement);
            }
            thumbnailElement.dataset.label = file.name;
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
                };
            } else {
                thumbnailElement.style.backgroundImage = null;
            }
        }
    },
}
</script>
<style scoped>
textarea {
    resize: none;
}
.section-light {
    padding: 50px 15px;
}
</style>