<script>
	import { page } from '$app/stores';

    const slugArr = $page.params.slug.split('/')
    console.log($page.params)

    //  default value 설정
    const { lang = 'ko' } = $page.params
    // const { lang } = $page.params
</script>

<h1>Docs 페이지</h1>

{#if slugArr.length === 1}
    <h1>Docs 페이지 : 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
    <h1> Docs 페이지 : 주제 {slugArr[0]}, 소주제 {slugArr[1]}</h1>
{/if}

{#if lang === 'ko'}
 <h2>안녕하세요</h2>
{:else} 
    <h2>Hello</h2>
{/if}