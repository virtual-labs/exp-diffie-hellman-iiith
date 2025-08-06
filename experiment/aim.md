A key exchange protocol allows two parties to establish a shared secret key over an insecure communication channel. A secure key exchange protocol must satisfy several properties:

(a) **Correctness**: Both parties should derive the same shared secret

(b) **Security**: An eavesdropper should not be able to determine the shared secret

(c) **Authentication**: The parties should be able to verify each other's identity (in authenticated versions)

The key exchange process involves each party generating their own private information and exchanging public information, from which both can independently compute the same shared secret.

In modern cryptography, secure communication over insecure channels is fundamental to digital security. Before the invention of public-key cryptography, establishing shared secrets required secure pre-shared channels. In cryptography, we learn that key exchange protocols revolutionized secure communication by enabling parties who have never met to establish shared secrets over completely public channels.

**About the experiment:**

In this experiment, we work with the groundbreaking Diffie-Hellman key exchange protocol, which was the first published public-key protocol and laid the foundation for modern cryptography. The Diffie-Hellman protocol allows two parties to establish a shared secret key over an insecure channel without any prior shared information. The security of this protocol relies on the computational difficulty of the discrete logarithm problem in finite fields. Your task is to understand and simulate the Diffie-Hellman key establishment process. Specifically, you will work with "toy" versions of the protocol to see how two parties can derive the same shared secret while keeping their individual private keys secure from eavesdroppers.
