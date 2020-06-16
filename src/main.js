import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Entry } from './scripts.js';

$(document).ready(function () {
  $("#journalEntry").submit(function (event) {
    event.preventDefault();

    var title = $("#titleInput").val();
    var text = $("#journalTextInput").val();
    var newEntry = new Entry(title, text);
    var wordCount = newEntry.numWords(text);
    var vowelCount = newEntry.numVowels();
    var consonantCount = newEntry.numConsonants();
    var teaser = newEntry.getTeaser();
    $(".ttlWords").text(wordCount);
    $(".ttlVowels").text(vowelCount);
    $(".ttlConsonants").text(consonantCount);
    $(".teaser").text(teaser);
    $(".output").show();
  });
});