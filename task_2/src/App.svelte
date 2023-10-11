<script lang="ts">
    let valIn1: number = 0
    let valIn2: number = 0
    let select1: string = "Выберете валюту"
    let select2: string = "USD"
    let mas: Object
    let rate: number = 1

    const firstFunc = async () => {
        $: mas = await fetch(`https://open.er-api.com/v6/latest/${select1}`)
            .then(response => response.json())
            .then(commits => commits.rates);
        $: rate = mas[select2]

    }
    const secondFunc = () => {
        $: rate = mas[select2]
    }

    const calc1 = (e) => {
        valIn1 = e.target.value
    }
    const calc2 = (e) => {
        valIn2 = e.target.value
    }

    $: valueInput1 = valIn2 / rate
    $: valueInput2 = valIn1 * rate


</script>

<main>
    <div>
        <select bind:value={select1} on:change={firstFunc}>
            <option value="USD">USD</option>
            <option value="AED">AED</option>
            <option value="KZT">KZT</option>
            <option value="COP">COP</option>
        </select>
        <select bind:value={select2} on:change={secondFunc}>
            <option value="USD">USD</option>
            <option value="AED">AED</option>
            <option value="KZT">KZT</option>
            <option value="COP">COP</option>
        </select>


    </div>
    <div>

        <label>{select1}</label>
        <input on:change={calc1} type="number" value={valueInput1}>
        <label>{select2}</label>
        <input on:change={calc2} type="number" value={valueInput2}>

    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 5vw;
    }

    select {
        width: 10vw;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 2vw;
    }
</style>


