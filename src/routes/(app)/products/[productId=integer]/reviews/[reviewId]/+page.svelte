<script>
	// url에서 page 정보 get
    import { page } from '$app/stores';
    // const productId = $page.params.productId
    // const reviewId = $page.params.reviewId

    const {productId, reviewId} = $page.params
</script>

<h1>제품 {productId}의 {reviewId}번째 리뷰</h1>