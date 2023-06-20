<script>
    import { page } from '$app/stores'

    let greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao',
        pt: 'Olá',
    }

    let { lang='it' } = $page.params
</script>

<h2> { greetings[lang] }</h2>

<style>
    h2 {
        color: chocolate;
    }
</style>