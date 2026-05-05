const tasks = [
      "Take a five-minute walk and look for one thing you've never noticed before.",
      "Write a short thank-you note and send it to someone unexpectedly.",
      "Try a new flavor combination in a snack or drink.",
      "Draw or doodle for three minutes without planning the outcome.",
      "Stand in the sun for a moment, close your eyes and name three things you appreciate.",
      "Take a photo of a small detail in your day that feels meaningful.",
      "Make a quick playlist of 5-10 songs that match your current mood.",
      "Share a silly or kind message with a friend.",
      "Create a mini dance move and do it once in your room.",
      "Arrange an object on your desk in a new way and notice how it feels.",
      "Write down one sentence that describes today so far.", 
      "Look out a window and follow one moving thing for 30 seconds.", 
      "Pick a color and find five things around you that match it.", 
      "Make up a tiny story about the last object you touched.",
      "Listen to a song and focus on just one instrument the whole time.",
      "Take a photo from a really low angle.",
      "Leave a nice note, on a small piece of paper for someone to find later.",
      
      

                        ];

                        const generateButton = document.getElementById('generateButton');
                        const savedButton = document.getElementById('savedButton');
                        const taskText = document.getElementById('taskText');
                        const uploadWrapper = document.getElementById('uploadWrapper');
                        const proofUpload = document.getElementById('proofUpload');
                        const proofPreview = document.getElementById('proofPreview');

                        let currentTask = null;
                        let hasSavedTask = false;

                        function chooseRandomTask() {
                          const index = Math.floor(Math.random() * tasks.length);
                            return tasks[index];
                            }

                            function updateTaskCard(text) {
                              taskText.textContent = text;
                              }

                              function updateSavedButton() {
                                savedButton.disabled = !currentTask;
                                  savedButton.textContent = hasSavedTask ? 'Saved' : 'Save';
                                  }

                                  function handleGenerate() {
                                    currentTask = chooseRandomTask();
                                      hasSavedTask = false;
                                        uploadWrapper.classList.add('hidden');
                                          proofPreview.innerHTML = '';
                                            proofUpload.value = '';
                                              updateTaskCard(currentTask);
                                                updateSavedButton();
                                                }

                                                function handleSave() {
                                                  if (!currentTask) return;
                                                    hasSavedTask = true;
                                                      uploadWrapper.classList.remove('hidden');
                                                        savedButton.textContent = 'Saved';
                                                        }

                                                        function handleUpload(event) {
                                                          const file = event.target.files[0];
                                                            if (!file) {
                                                                proofPreview.innerHTML = '';
                                                                    return;
                                                                      }

                                                                        const reader = new FileReader();
                                                                          reader.onload = () => {
                                                                              proofPreview.innerHTML = `<img src="${reader.result}" alt="Photo proof" />`;
                                                                                };
                                                                                  reader.readAsDataURL(file);
                                                                                  }

                                                                                  generateButton.addEventListener('click', handleGenerate);
                                                                                  savedButton.addEventListener('click', handleSave);
                                                                                  proofUpload.addEventListener('change', handleUpload);

                                                                                  updateSavedButton();
