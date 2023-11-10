<script lang="ts">
    export let data
</script>

{#if data.username}
Welcome {data.username}!
{:else}
Welcome!
{/if}