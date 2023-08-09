import React, { useState } from 'react';
// import reactRouterDom from 'react-router-dom';

// Declare a new state variable, which we'll call "count"

export default function TextForm(prop) {
	//Global declaration:
	let [count, setCount] = useState(0);
	let [count1, setCount1] = useState(0);
	let countChar = 0,
		countCons = 0;

	// Function to count Vowels:

	const handleVoClick = () => {
		for (count = 0; count <= text.length; count++) {
			if (text.charAt(count).match(/[aeiouAEIOU]/)) {
				countChar++;
				setCount(countChar);
			}
		}
		// console.log("No. of Vowels are: " + countChar);
	};

	// Function to count Consonants:
	const handleCoClick = () => {
		for (count1 = 0; count1 <= text.length; count1++) {
			if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
				countCons++;
				setCount1(countCons);
			}
		}
	};

	// Function to convert to Upper case
	const handleUpperCaseClick = () => {
		//console.log('UpperCase was clicked', text);
		let newText = text.toUpperCase();
		setText(newText);
		prop.showAlert('Converted to Uppercase!', 'success');
	};

	// Function to convert to Lower case
	const handleLowerCaseClick = () => {
		setText(text.toLowerCase());
		prop.showAlert('Converted to Lowercase!', 'success');
	};

	// Function to convert text to reverse
	const handleReverseText = () => {
		let newText = '';
		for (let i = text.length - 1; i >= 0; i--) {
			console.log(i);
			console.log(text[i]);
			newText += text[i];
		}
		setText(newText);
		prop.showAlert('Text has been reversed.', 'success');
	};

	// Function to convert to Dictate the text
	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		prop.showAlert('Now reading the text field.', 'success');
	};

	// Function to clear text field
	const handleClearTextField = () => {
		setText('');
		prop.showAlert('Text field has been cleared.', 'success');
	};

	//setText('Text Enter here');
	const handleOnChange = (event) => {
		// console.log('On Change');
		setText(event.target.value);
	};

	const handlefindChange = (event) => {
		findWord(event.target.value);
	};

	// Function to replace word
	const handleReplaceChange = (event) => {
		console.log(replaceWord(event.target.value));
	};

	const handleReplaceClick = () => {
		let newText = text.replaceAll(fWord, rWord);
		setText(newText);
		prop.showAlert('Text has been replaced.', 'success');
	};
	const handleCopy = () => {
		// var text = document.getElementById("myBox");
		// text.select();
		navigator.clipboard.writeText(text);
		prop.showAlert('Text has been copied to clip board.', 'success');
	};
	const handleExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
		prop.showAlert('Extra spaces has been removed.', 'success');
	};

	const [text, setText] = useState('');
	const [fWord, findWord] = useState('');
	const [rWord, replaceWord] = useState('');

	return (
		<>
			<div className='container' style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
				<h1 className='mb-3'>{prop.heading}</h1>
				<div className='mb-3'>
					<textarea className='form-control' id='myBox' rows='8' value={text} onChange={handleOnChange} style={{ backgroundColor: prop.mode === 'dark' ? '#042743' : 'white', color: prop.mode === 'dark' ? 'white' : '#042743' }}></textarea>
				</div>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpperCaseClick}>
					Convert to upper case
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowerCaseClick}>
					Convert to lower case
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleReverseText}>
					Reverse Text
				</button>
				<button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={speak}>
					Speak
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearTextField}>
					Clear Text Field
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>
					Copy Text
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>
					Remove Extra Space
				</button>
			</div>
			<div className='container my-3' style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
				<button disabled={text.length === 0} className='btn btn-primary mx-1' onClick={handleVoClick}>
					Count no. of Vowels
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-1' onClick={handleCoClick}>
					Count no. of Consonants
				</button>
				<h3>You have entered:</h3>
				<p>{count} of Vowels</p>
				<p>{count1} of Consonants</p>
			</div>
			<div className='container my-3' style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
				<h2>Find and Replace</h2>
				<textarea className='mx-1' name='findText' id='myBox' cols='30' rows='1' value={fWord} onChange={handlefindChange}></textarea>
				<textarea className='mx-1' name='replaceText' id='myBox' cols='30' rows='1' value={rWord} onChange={handleReplaceChange}></textarea>
				<button disabled={text.length === 0} type='button' className='btn btn-primary mx-1 mb-4' id='myBox' onClick={handleReplaceClick}>
					Replace
				</button>
				<h2>Your text summary</h2>
				<p>
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{' '}
					words & {text.length} characters
				</p>
				<p>
					It will take{' '}
					{0.008 *
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length}{' '}
					minutes to reade the above text.
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
			</div>
		</>
	);
}
