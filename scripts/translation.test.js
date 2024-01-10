//import encoder and decoder
import { encoder } from "./translation.js";
import { decoder } from "./translation.js";



describe("Testing encoder()", () => {
  it("Should return a morse string", () => {
    expect(encoder("example")).toBe(". -..- .- -- .--. .-.. .")
  });

  it("Should return slash / between words", () => {
    expect(encoder("Quick brown fox jumps over the lazy dog")).toBe("--.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
    expect(encoder("Sphinx of black quartz judge my vow")).toBe("... .--. .... .. -. -..- / --- ..-. / -... .-.. .- -.-. -.- / --.- ..- .- .-. - --.. / .--- ..- -.. --. . / -- -.-- / ...- --- .--");
  });

  it("Should encode numbers", () => {
    expect(encoder("76 89 045 3231")).toBe("--... -.... / ---.. ----. / ----- ....- ..... / ...-- ..--- ...-- .----");
  });

  it("Should encode numbers and letters", () => {
    expect(encoder("101 Dalmations")).toBe(".---- ----- .---- / -.. .- .-.. -- .- - .. --- -. ...");

  })
});

describe("Testing decoder()", () => {
  it("Should return a string of letters and/or numbers", () => {
    expect(decoder(".. / .-- .. ... .... / ..-. --- .-. / .- / -.. .. ... .... / --- ..-. / ..-. .. ... ....")).toBe("i wish for a dish of fish");
    expect(decoder("..--- ----- ..--- ....- / .. ... / .- / .-.. . .- .--. / -.-- . .- .-. / ... --- / ..-. . -... .-. ..- .- .-. -.-- / .... .- ... / ..--- ----. / -.. .- -.-- ...")).toBe("2024 is a leap year so february has 29 days");
    expect(decoder("....- ...-- ...-- ..--- .---- ..... / -.... ..... ---.. / ----. ----- --...")).toBe("433215 658 907");
  });
})