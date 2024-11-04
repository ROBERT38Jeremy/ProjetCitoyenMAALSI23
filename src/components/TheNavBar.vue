<template>
    <ul>
        <li>
            <a href="default.asp">Ressources</a>
        </li>
        <li>
            <a href="news.asp">Atelier</a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0;
    box-shadow: 0px 0px 15px -10px #000000;
}

li {
    padding: 0.7em 0;
    transition: all 0.2s ease-in-out;
}

li:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}

li a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    padding: 0.7em 1em;
    border: none;
}
</style>