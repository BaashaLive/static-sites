console.log("Hello!")

const voices = [
	{ name: "Rhea, India (Female)", value: "hi-IN-Neural2-A" },
	{ name: "Tara, India (Female)", value: "hi-IN-Neural2-D" },
	{ name: "Ajay, India (Male)", value: "hi-IN-Neural2-B" },
        { name: "Rohit, India (Male)", value: "hi-IN-Neural2-C" },
        { name: "Jack, USA (Male)", value: "en-US-Neural2-D" },
	{ name: "Rose, USA (Female)", value: "en-US-Neural2-E" },
	{ name: "Rick, USA (Male)", value: "en-US-Neural2-I" },
	{ name: "Rita, USA (Female)", value: "en-US-Neural2-F" },
	{ name: "wavenet-female-1", value: "en-US-Wavenet-E" },
	{ name: "wavenet-male-1", value: "en-US-Wavenet-I" }
]


function makeVoiceUrl(value) {
	const baseUrl = "https://cloud.google.com/static/text-to-speech/docs/audio/"
	return baseUrl + value + ".wav"
}

ul = document.getElementById("voices_list")

for (let v of voices) {
	li = document.createElement("li")
	audioUrl = makeVoiceUrl(v.value)
	li.innerHTML = `<h3>${v.name}</h3><audio controls><source src=${audioUrl}></source></audio>`

	ul.appendChild(li)
}
