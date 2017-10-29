<template>
    <table>
        <tr>
            <td rowspan="3" class="tooltip-picture">{{ picture }}</td>
            <td><h3>{{ title }}</h3></td>
            <td>nickname: 🌟🌟🌟🌟</td>
        </tr>
        <tr>
            <td colspan="2">{{ description }}</td>
        </tr>
        <tr>
            <td><a href="" class="button">Chcę to!</a></td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'Info',
}
</script>