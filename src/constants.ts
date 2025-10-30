export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  php: "8.2.3",
  swift: "5.3.3",
  c: "10.2.0",
  dart: "2.19.6",
  go: "1.16.2",
  kotlin: "1.8.20",
  ruby: "3.0.1",
  rust: "1.68.2",
} as const;

export const CODE_SNIPPETS = {
  javascript: `console.log("Hello World");`,
  typescript: `console.log("Hello World");`,
  python: `print("Hello World")`,
  java: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
  php: `<?php echo "Hello World"; ?>`,
  swift: `print("Hello World")`,
  c: `
#include <stdio.h>
int main() {
    printf("Hello World\\n");
    return 0;
}`,
  dart: `void main() { print("Hello World"); }`,
  go: `package main
import "fmt"
func main() {
    fmt.Println("Hello World")
}`,
  kotlin: `fun main() { println("Hello World") }`,
  ruby: `puts "Hello World"`,
  rust: `fn main() { println!("Hello World"); }`,
} as const;

export type Language = keyof typeof CODE_SNIPPETS;
