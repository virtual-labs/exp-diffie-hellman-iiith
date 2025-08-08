For a very brief theory of Diffie-Hellman key exchange and their analysis, click [here](docs/DHKE1.pdf)

The Diffie-Hellman key exchange is a pioneering cryptographic protocol that enables two parties to establish a shared secret key over a public communication channel. Developed by Whitfield Diffie and Martin Hellman in 1976, this protocol revolutionized cryptography by solving the key distribution problem without requiring a pre-shared secret.

### How It Works

1. **Public Setup**: Both parties agree on public parameters:
   - A large prime number **p**
   - A generator **g** (primitive root modulo p)
2. **Private Key Generation**: Each party generates their own private key:
   - Alice chooses private key **a**
   - Bob chooses private key **b**
3. **Public Key Calculation**: Each party computes their public key:
   - Alice calculates **g^a mod p**
   - Bob calculates **g^b mod p**
4. **Key Exchange**: Public keys are exchanged over the public channel
5. **Shared Secret Derivation**: Each party computes the same shared secret:
   - Alice computes **(g^b)^a mod p = g^(ab) mod p**
   - Bob computes **(g^a)^b mod p = g^(ab) mod p**

### Mathematical Foundation

The protocol relies on the **discrete logarithm problem**:

- **Easy**: Computing g^x mod p given g, x, and p
- **Hard**: Finding x given g, g^x mod p, and p (for large numbers)

### Security Properties

The Diffie-Hellman protocol provides:

1. **Key Establishment**: Both parties derive the same shared secret
2. **Public Channel Security**: The protocol works over insecure communication channels
3. **Forward Secrecy**: Past communications remain secure even if long-term keys are compromised

<img src="images/image9.png">

### Protocol Vulnerability

While secure against passive eavesdropping, the basic Diffie-Hellman protocol is vulnerable to:

1. **Man-in-the-Middle Attacks**: An active attacker can intercept and modify communications
2. **Small Subgroup Attacks**: Using weak generators can compromise security
3. **Invalid Curve Attacks**: In elliptic curve variants, malformed parameters can be exploited

### Modern Applications

Diffie-Hellman key exchange is fundamental to modern security protocols:

1. **TLS/SSL**: Secure web communications
2. **IPSec**: Virtual private networks
3. **SSH**: Secure shell connections
4. **Signal Protocol**: End-to-end encrypted messaging
