<template>
    <table id="tablaDashboard" class="table table-hover text-nowrap table-bordered">
        <thead>
            <tr>
                <th>Código del pedido</th>
                <th>Nombre del cliente</th>
                <th>Total del pedido</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody v-if="$store.state.pedidos">
            <tr v-for="pedido in $store.state.pedidos" :key="pedido.id">
                <td data-label="Código del pedido">
                    <p class="mt-2">{{pedido.codigo}}</p>
                </td>
                <td data-label="Nombre del cliente">
                    <p class="mt-2">{{pedido.nombre}}</p>
                </td>
                <td data-label="Total del pedido">
                    <p class="mt-2">${{pedido.total.toFixed(2)}}</p>
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
    name: 'ListaPedidos'
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