
			$( document ).ready(function() {

				var showWorkCheckbox = $("#show_work");
				if (  showWorkCheckbox  ) {

					showWorkCheckbox.change(function (){

						if($(this).is(":checked")) {

							$("._work").each(function () {

								$(this).show();

							});

						} else {

							$("._work").each(function () {

								$(this).hide();

							});
						}

					});
				}




				var calculateButton = $("#calculate");

				if ( ! calculateButton ) {
					return;
				}


				var priorInput       = $("#prior");
				var sensitivityInput = $("#sensitivity");
				var specificityInput = $("#specificity");

				if ( ! priorInput ) {
					return;
				}
				if ( ! sensitivityInput ) {
					return;
				}
				if ( ! specificityInput ) {
					return;
				}


				var notPriorInput            = $("#not_prior");
				var oneMinusSensitivityInput = $("#one_minus_sensitivity");
				var oneMinusSpecificityInput = $("#one_minus_specificity");

				if ( ! notPriorInput ) {
					return;
				}
				if ( !oneMinusSensitivityInput ) {
					return;
				}
				if ( ! oneMinusSpecificityInput ) {
					return;
				}


				var priorXSensitivityInput                 = $("#prior_x_sensitivity");
				var oneMinusPriorXOneMinusSpecificityInput = $("#one_minus_prior_x_one_minus_specificity");

				if ( ! priorXSensitivityInput ) {
					return;
				}
				if ( ! oneMinusPriorXOneMinusSpecificityInput ) {
					return;
				}


				var priorXOneMinusSensitivityInput = $("#prior_x_one_minus_sensitivity");
				var oneMinusPriorXSpecificityInput = $("#one_minus_prior_x_specificity");

				if ( ! priorXOneMinusSensitivityInput ) {
					return;
				}
				if ( ! oneMinusPriorXSpecificityInput ) {
					return;
				}


				var normalizer1Input = $("#normalizer1");
				var normalizer2Input = $("#normalizer2");

				if ( ! normalizer1Input ) {
					return;
				}
				if ( ! normalizer2Input ) {
					return;
				}



				var answer11Input = $("#answer1-1");
				var answer12Input = $("#answer1-2");
				var answer21Input = $("#answer2-1");
				var answer22Input = $("#answer2-2");

				if ( ! answer11Input ) {
					return;
				}
				if ( ! answer12Input ) {
					return;
				}
				if ( ! answer21Input ) {
					return;
				}
				if ( ! answer22Input ) {
					return;
				}


				calculateButton.click(function() {

					var prior       = priorInput.val();
					var sensitivity = sensitivityInput.val();
					var specificity = specificityInput.val();

					var prior       = Big(prior);
					var sensitivity = Big(sensitivity);
					var specificity = Big(specificity);


					var One = Big(1);


					var notPrior            = One.minus(prior);
					var oneMinusSensitivity = One.minus(sensitivity);
					var oneMinusSpecificity = One.minus(specificity);

					notPriorInput.val(notPrior);
					oneMinusSensitivityInput.val(oneMinusSensitivity);
					oneMinusSpecificityInput.val(oneMinusSpecificity);


					var priorXSensitivity                 =     prior.times(sensitivity);
					var oneMinusPriorXOneMinusSpecificity =  notPrior.times(oneMinusSpecificity);

					priorXSensitivityInput.val(priorXSensitivity);
					oneMinusPriorXOneMinusSpecificityInput.val(oneMinusPriorXOneMinusSpecificity);


					var priorXOneMinusSensitivity = prior.times(oneMinusSensitivity);
					var oneMinusPriorXSpecificity = notPrior.times(specificity)

					priorXOneMinusSensitivityInput.val(priorXOneMinusSensitivity);
					oneMinusPriorXSpecificityInput.val(oneMinusPriorXSpecificity);


					var normalizer1 = priorXSensitivity.plus(oneMinusPriorXOneMinusSpecificity)
					var normalizer2 = priorXOneMinusSensitivity.plus(oneMinusPriorXSpecificity);

					normalizer1Input.val(normalizer1);
					normalizer2Input.val(normalizer2);



					var answer11 = priorXSensitivity.div(normalizer1);
					var answer12 = oneMinusPriorXOneMinusSpecificity.div(normalizer1);
					var answer21 = priorXOneMinusSensitivity.div(normalizer2);
					var answer22 = oneMinusPriorXSpecificity.div(normalizer2);

					answer11Input.val(answer11);
					answer12Input.val(answer12);
					answer21Input.val(answer21);
					answer22Input.val(answer22);

				});

				calculateButton.attr("disabled", false);


			});
