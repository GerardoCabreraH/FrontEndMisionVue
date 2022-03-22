<template>
    <table id="tablaDashboard" class="table table-hover text-nowrap table-bordered">
        <thead>
            <tr>
                <th>Código del usuario</th>
                <th>Nombre del usuario</th>
                <th>Rol del usuario</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody v-if="$store.state.usuarios">
            <tr v-for="usuario in $store.state.usuarios" :key="usuario.id">
                <td data-label="Código del usuario">
                    <p class="mt-2">{{usuario.codigo}}</p>
                </td>
                <td data-label="Nombre del usuario">
                    <p class="mt-2">{{usuario.nombre}}</p>
                </td>
                <td data-label="Rol del usuario">
                    <p class="mt-2">{{usuario.rol}}</p>
                </td>
                <td data-label="Acciones">
                    <div
                        class="form-group d-flex align-items-sm-center flex-sm-row flex-column mt-2">
                        <div class="p-1">
                            <a class="btn btn-primary" href="#">Ver</a>
                        </div>
                        <div class="p-1">
                            <a class="btn btn-warning"
                                href="#">Editar</a>
                        </div>
                        <div class="p-1">
                            <a class="btn btn-danger" href="#">Eliminar</a>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="4">Sin resultados</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'ListaUsuarios'
}
</script>
<style scoped>
    #tablaDashboard.table {
        width: 100%;
    }
    @media only screen and (max-width: 768px){
        #tablaDashboard.table thead {
            display: none;
        }
        #tablaDashboard.table, #tablaDashboard.table tbody, #tablaDashboard.table tr, #tablaDashboard.table td {
            display: block;
            width: 100%;
            border: none;
        }
        #tablaDashboard.table tr {
            margin-bottom: 15px;
            border: 1px #000 solid;
        }
        #tablaDashboard.table td {
            text-align: center;
            position: relative;
        }
        #tablaDashboard.table td a {
            display: block;
        }
        #tablaDashboard.table td::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            font-weight: bold;
        }
    }
</style>