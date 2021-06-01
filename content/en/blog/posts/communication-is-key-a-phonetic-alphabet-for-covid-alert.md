---
layout: blog
title: 'Communication is key: A phonetic alphabet for COVID Alert'
description: >-
  Learn how and why our team developed a new phonetic alphabet to help
  healthcare workers using the COVID Alert Portal give one-time keys over the
  phone to patients during a stressful time.
author: 'Élise Cossette, Outreach and Yedida Zalik, Content Design'
date: 2020-10-27T12:56:48.422Z
image: https://de2an9clyit2x.cloudfront.net/banner_phonetic_alphabetic_blog_8f889946bb.jpg
image-alt: >-
  A healthcare worker successfully communicating a one-time key to a patient
  over the phone.
translationKey: phonetic-alphabet-blog
thumb: https://de2an9clyit2x.cloudfront.net/small_banner_phonetic_alphabetic_blog_8f889946bb.jpg
---
Healthcare workers put themselves at risk to keep us safe. They also play a crucial role in the success of the COVID Alert app.

When someone in a participating province tests positive for COVID-19, healthcare workers distribute an alphanumeric one-time key that can be entered in the app to send exposure notifications.

That interaction is central to letting people know that they may have been exposed to COVID-19. You can read more about one-time key generation in different provinces in [this blog post.](https://digital.canada.ca/2020/09/03/meeting-the-needs-of-healthcare-authorities-to-roll-out-covid-alert-across-canada/)

## Communicating the key

But it isn’t just a simple transaction. We have to remember the human side and the very real emotions that come into play during these conversations. Healthcare workers are relaying this alphanumeric key to people who just learned that they have COVID-19. These people are stressed and worried. Healthcare workers also experience pressure related to pandemic challenges.

These interactions will often take place by phone rather than in person, making communication even more challenging. The phone is another barrier between the healthcare worker reading out the key, and the patient hearing the correct letters and numbers, then recording and entering them into the app. And for many people, this could be further complicated if English or French is their second, third, or fourth language.

[In a previous blog post](https://digital.canada.ca/2020/10/02/building-an-effective-exposure-notification-service-like-covid-alert/), COVID Alert’s service owner outlined the two main considerations prioritized in the initial build of the service, as well as what we continue to prioritize as we improve it. One of those was “getting it into as many hands as possible.” One way to do that is to make it as accessible as possible.

That’s why we’re considering how communicating the alphanumeric key to patients could flow more smoothly during a stressful time, to increase accessibility for everyone who needs it.

## Matching words to sounds

[Bryan Robitaille](https://twitter.com/RobitailleBryan) on our development team thought of using a phonetic alphabet to simplify the process and help the healthcare worker and the app user overcome communication problems. Rather than the phonetic alphabet used in linguistics (which matches conventional symbols to pronunciations), this would be an alphabet that matches words to the sound of their first letter. It’s also called a spelling alphabet or radio alphabet. (Our researchers also learned that without being prompted, users of the Dutch COVID app often used words to confirm letters in the Dutch key.)

The most common phonetic alphabets come from NATO and Western Union (Alpha, Bravo, Charlie…), but many of these alphabets were intended for use between people working in shared environments with a shared vocabulary. In the context of COVID Alert, some of these words may not be understood across cultures and by all members of the public in Canada.

For example, “Yankee” can be offensive, and “foxtrot” is tied to specific cultures and generations.

**We wondered if we could find words for our context and reality. If so, how would we identify and select these words?**

![An alphanumeric key (284 FKQ 889) being read out in numbers and words: “two, eight, four, family, kangaroo, question, eight, eight, eight, nine”.](https://de2an9clyit2x.cloudfront.net/blog_phonetic_en_7b8f349804.jpg)

## Choosing our alphabet

We started by thinking about criteria for words that work well to communicate the one-time key:

* Similar in English and French
* Cross-cultural nouns
* At least 2 syllables
* Evocative spoken sounds
* No negative connotations

In what follows, we use italics for French words.

### Similar in English and French

We wanted words that are similar in both English and French so it would be easier for healthcare workers who work with a bilingual population. For example, for the letter “a” we use “animal”, which has the same meaning in both English and French.

The exception to this was the letter “x”, since very few words that start with “x” are similar in both languages and also commonly used. We use “X-ray” in English, but not in French since the word *rayon X* doesn’t start with an “x”, therefore breaking the implicit rule of the phonetic alphabet (and the listener’s expectations). We chose *xylophone* in French, but didn’t use it in English because the “x” has a “z” sound, which could cause confusion.

### Cross-cultural nouns

We wanted words that are more likely to be familiar across cultures. For this reason, we decided not to use personal names (like “Charlie”) and focus on common nouns (like “zebra”) that people learn early when studying a new language. We also favoured words that could be easily visualized, since a visual association could possibly help with word labels and spelling.

### At least 2 syllables

We decided to select words with at least 2 syllables. We were concerned that a word with one syllable is more likely to be confused with another sound. It also could mean that the listener might combine that one sound with the previous or next word being read to them.

Since the second syllable can support the first syllable, we thought this could help the listener confirm that they heard the right word. “Family” and “radio” are good examples of this.

### Evocative spoken sounds

Similar to using syllables to separate one spoken word from the next, we needed to think about the way a word sounds when spoken. For example, for the letter “c”, the NATO and Western Union alphabets use both “Charlie” and “Chicago” respectively. As a result, the “ch” sound is not confused with words that start with a “k” or “s” sound,  in the way the words “castle” or “city” might be. We also chose to go with the “ch” sound, but used the word “chocolate” because it is a common noun and not a name.

In French, many words that start with “e” are followed by the letter “m” or “n” (*environnement, emploi*), which are pronounced the same as words starting with “an” (*anglais*). To avoid confusion or additional cognitive effort from patients, we are testing the word “espresso”, where the sound of the first letter can be heard.

This is also why we decided not to use “hotel” from the NATO alphabet. Though spelt the same in both languages, in French the “h” is silent, and *hôtel* is therefore pronounced the same as *autel*. We chose the word *hôpital*/”hospital”, and even though it still has a silent “h” in French, it’s not ambiguous because no other words are pronounced the same. Plus, as our colleague [Anik Brazeau](https://twitter.com/BrazeauAnik) pointed out, it’s often symbolized by the letter H on road signs, so people would already have an association between the word and that letter.

### No negative connotations

We wanted to avoid words with negative connotations so as not to subconsciously add negative thoughts to an already stressful situation. That’s why we removed the connection to alcohol that came with the NATO word “whisky” for “w” and replaced it with “Wi-Fi”.

## Moving forward

Working on a phonetic alphabet to help facilitate the one-time key transfer has been fascinating. Most of our original principles were based on general assumptions about accessibility and inclusion, and so far usability testing has shown that the phonetic alphabet works. People successfully recorded the correct key even when they expected to hear a word from the NATO alphabet, and were surprised to hear another word instead.

As we get more feedback, we’ll continuously improve the [phonetic alphabet](https://digital.canada.ca/phonetic-alphabet/) to make it easier for healthcare workers to communicate one-time keys. If you or anyone you know is a healthcare worker responsible for contacting patients with positive results, please [sign up to be part of ongoing research](https://digital.canada.ca/covid-alert-research-signup/). Signing up takes less than 5 minutes and your feedback will help us improve as we work towards reducing the spread of COVID-19 across Canada.
