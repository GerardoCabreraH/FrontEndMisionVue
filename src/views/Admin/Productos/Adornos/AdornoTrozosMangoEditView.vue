<template>
    <NavbarAdmin />
    <main id="dashboard" class="content">
        <section id="count" class="section-light">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <h1 class="text-center">Modificacion del adorno trozos de mango</h1>
                    </div>
                    <div class="col-12 col-sm-12 mt-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-sm-12">
                                        <InformacionAdorno>
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
                                                    class="form-control" value="Trozos de mango">
                                            </div>
                                            <div class="form-group">
                                                <label for="role">Tipo de producto</label>
                                                <select class="form-control" type="text" id="role" name="role">
                                                    <option value="">Seleccionar tipo de producto</option>
                                                    <option value="Sabor">Sabor</option>
                                                    <option value="Adorno" selected>Adorno</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="price">Precio del producto</label>
                                                <input type="text" name="price" id="price" placeholder="Precio"
                                                    class="form-control" value="50.00">
                                            </div>
                                            <div class="form-group">
                                                <label for="description">Descripción del producto</label>
                                                <textarea type="text" id="description" name="description" rows="5"
                                                    placeholder="Descripción"
                                                    class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="stock">Existencias</label>
                                                <input type="text" name="stock" id="stock" placeholder="Existencias"
                                                    class="form-control" value="30">
                                            </div>
                                        </InformacionAdorno>
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <div class="form-group">
                                            <p><strong>Acciones:</strong></p>
                                            <router-link class="btn btn-primary btn-block" to="/admin/productos/ver/m00622">Regresar</router-link>
                                            <button type="button" class="btn btn-success btn-block">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import InformacionAdorno from "@/components/Admin/Adornos/InformacionAdorno.vue";
export default {
    name: 'AdornoTrozosMangoEditView',
    components: { NavbarAdmin, InformacionAdorno },
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
        let body = document.querySelector('body');
        body.style.backgroundColor = "#ffffff";
    },
}
</script>

<style scoped>
.content {
    width: 80%;
    float: right;
    position: relative;
}
.section-light {
    padding: 50px 15px;
}
.img-card {
    width: 300px;
    height: 200px;
}
@media only screen and (max-width: 768px){
    .content {
        width: 100%;
        float: left;
    }
}  
</style>