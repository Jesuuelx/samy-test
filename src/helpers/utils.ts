import { css, keyframes } from "styled-components";

export const padWithZeros = (number: number, minLength: number) => {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
};

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const formatPrice = (price: number): string => {
  // Convertir el número a un string con dos decimales
  const formattedPrice = price.toFixed(2).replace(".", ",");

  // Concatenar el símbolo del euro al final
  return `${formattedPrice}€`;
};

export const removeEspecialCharacters = (value: string) =>
  value.toString().replace(/[^a-zA-Z0-9\s.\u00C0-\u017F]/g, "");
