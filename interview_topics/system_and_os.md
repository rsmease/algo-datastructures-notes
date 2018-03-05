## Boot Process

- Power sends electricity to the motherboard
- Motherboard activates the read-only BIOS chip, that runs a test of all system hardware: videocard, CPU, RAM, peripherals
- When the BIOS tests are complete, control is handed over to the CPU

## Computer Hardware, Memory

- BIOS controls input from peripherals and passes them to the CPU
- CPU fetches instructions from memory and executes them, billions per second
- Instructions are managed by three kinds of boolean gates within transistors: AND gate, OR gate and NOT gates
- Boolean logic of gates are managed by the presence or absence of a charge running through an electron gate 
- Programs are executed in short term memory (RAM), but can be saved in a hard drive for permanent memory
- Dynamic RAM: each memory cell is composed of a transistor and a capacitor that store electrical charges
    - Dynamic because it's constantly recharged to retain active memory
- Static RAM: six interlocked transistors that don't need to be refreshed
- RAM can only hold information for as long as it's given electricity to retain it
- With hard drive memory, latency is greater because you have to use a spinning disk to obtain stored information
    - Solid-state drives are faster and work by trapping electrical charges within floating gates
    - All more permanent memory strategies are liable to become weaker/degraded over time

## Compilers

- Special computer program that converts your code to machine code
- CPUs can only do a few things: read and write to memory, and do mathematical operations
- Machine code: programs written as a series of binary instructions
    - Allows CPUs to interact with memory, which is composed of transistors/boolean gates
- Source code: programs written as human-readable, which is compiled by a compiler 
- How a compiler processes source code:
    - Perform a syntactic analysis of a program
    - Understand the intended logical process of the source code
    - Optimize the declaration and assignment of variables
    - Produces assembly code, which is a particular traversal of the syntactical tree, now optimized, that will match the known instructions available to the computer's binary capabilities
        - Assembly code is a human-readably version of object code
    - Produces object code, which is a formal sequence of declarative statements in either binary or an intermediate language such as register transfer language (RTL)
    - Object code is then linked together to form a complete program which can be executed by the CPU
- Compilers do not necessarily run on different platforms
- Java is famous for producing a compromise: a less performant but easier to move set of instructions that can run on anything


## Database Indexs and N + 1 queries

- N + 1 queries happen when associations for a particular table are not loaded because the query for the original table is loaded lazily
    - This leads to a unique database query as we iterate over the results of the association query
- Database indexes are useful for trapping specific, ordered memory addresses of a particular column in a table, allowing for faster lookup of the data stored in the corresponding row
    - This makes querying the table using that column much faster 

## Pointers in C

- Memory allocation is determined by the compiler and depends on input type: integers are given four bytes; characters are give one byte
- Variables are written, in binary, at the memory address where the their variable is stored
- Pointers are variables that store the address of other variables
    - Due to dereferencing, *variable will give us the value stored at the the memory address that it points to
    - Similarly, modifying the pointer assignment will also modify the value of the variable that it points to

## Boolean Logic and Logic Gates

- On state: electricity is flowing; off state, electricity is not flowing
    - The problem with ternary or quinary states is that it's hard to measure the distinction between the signals
    - Boolean algebra was also already popular and an OS could be build using Boolean patterns
- Not: flips true/false
    - Not gates have electricity unless the input is true
- And: requires two true inputs for electricity to run
- Or: requires only one of two true inputs for electricity to run
- Xor: if both inputs are true, the output is false
    - Only one of the two conditions can be true

## Operating Systems

- Allow computers to manage their own programs
- Computers can be given processes to run in a batch (queue)
    - OS kernels schedule the use of memory and time available on the computer and smartly multitask a variety of programs, all cached when they are not being processed
- Virtual memory allocation allows programs to run over scattered pieces of memory without realizing it
    - Also allows computers to distribute memory in an effective and somewhat random way, which is more secure
