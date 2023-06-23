<script>

    export let data

    let address = ""
    let postcodeList = data.postcodeList
    console.log(data)
</script>

<h1>Address Page</h1>
<h3>Choose your address</h3>

<select bind:value = {address}>
    <option value="">Select an address</option>
    {#each postcodeList as postcodeItem}
        <option value={postcodeItem}>{postcodeItem}</option>
    {/each}
</select>


