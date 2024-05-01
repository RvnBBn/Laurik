$(document).ready(function() {
    const apiKey = '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'; // Înlocuiți cu cheia dvs. de acces OpenAI

    

        // Apel către API-ul OpenAI pentru a recunoaște cuvântul
       
    $('#wordForm').submit(function(event) {
        event.preventDefault();
        const inputWord = $('#wordInput').val();

        // Trimite solicitarea către API-ul OpenAI
        $.ajax({
            url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            method: 'POST',
            data: JSON.stringify({
                prompt: `Find synonyms for "${inputWord}".`,
                max_tokens: 5 // Numărul maxim de token-uri pentru completare
            }),
            success: function(response) {
                const synonyms = response.choices.map(choice => choice.text.trim());
                $('#result').html(`<p>Sinonime pentru "${inputWord}": <strong>${synonyms.join(', ')}</strong></p>`);
            },
            error: function(error) {
                console.error('Eroare la solicitarea API-ului OpenAI:', error);
                $('#result').html(`<p>Eroare la solicitarea API-ului OpenAI.</p>`);
            }
        });
    });
});
