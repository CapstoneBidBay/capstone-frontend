<script setup>

import { ref } from 'vue';

const isModalActive = ref(true)
const inputVal = ref('')

</script>

<template>
 <div id="tt-pageContent">
	<div class="container-indent">
		<div class="container">
			<h1 class="tt-title-subpages noborder">ALREADY REGISTERED?</h1>
			<div class="tt-login-form">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<div class="tt-item">
							<h2 class="tt-title">NEW CUSTOMER</h2>
							<p>
								By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
							</p>
							<div class="form-group">
								<a href="#" class="btn btn-top btn-border">CREATE AN ACCOUNT</a>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-md-6">
						<div class="tt-item">
							<h2 class="tt-title">LOGIN</h2>
							If you have an account with us, please log in.
							<div class="form-default form-top">
								<form id="customer_login" method="post" novalidate="novalidate">
									<div class="form-group">
										<label for="loginInputName">USERNAME OR E-MAIL *</label>
										<div class="tt-required">* Required Fields</div>
										<input type="text" name="name" class="form-control" id="loginInputName" placeholder="Enter Username or E-mail">
									</div>
									<div class="form-group">
										<label for="loginInputEmail">PASSWORD *</label>
										<input type="text" name="passowrd" class="form-control" id="loginInputEmail" placeholder="Enter Password">
									</div>
									<div class="row">
										<div class="col-auto mr-auto">
											<div class="form-group">
												<button class="btn btn-border" type="submit">LOGIN</button>
											</div>
										</div>
										<div class="col-auto align-self-end">
											<div class="form-group">
												<ul class="additional-links">
													<li><a href="#">Lost your password?</a></li>
												</ul>
											</div>
										</div>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
