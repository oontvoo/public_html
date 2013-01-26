#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LEN 20

int main(void)
{
  char str[MAX_LEN];
  int i, j, len, last;
  
  printf("Enter a string: ");
  scanf("%s", str);

  last = len = strlen(str);

  //  printf("string lengh read: %d\n=====\n\n", len);
  // only need to start at the
  // second to last char
  --len;
  while (len >= 0)
  {
    switch(fork())
    {
        case 0: // child
          //      printf("in child: %d\n", getpid());
          //          printf("initial len: %d\n", len);
          i = len - 1; // curent position
          j = -1; // found a substring that is palindrome?
          len = last - len; // initial str len of the palin drom
          last -= len; // actually the beginning of the sub str 
          
          //          printf("len = %d\n", len);
          //          printf("last = %d\n", last);
          while (len >= 0)
          {
            if (str[i] == str[i + len])
            {
              ++i;
              if (j < 0)
                j = len;
            }
            else
              j = -1;
            --len;
          }
          if (j > 1)
          while (j >= 0)
            printf("[%c]", str[last + j--]);
          j = getpid();
          kill(j);

          //          printf("\n------done with %d ----\n\n", j);
          return j;
          
        case -1: //  failed
          printf ("falied to fork()\n");
          break;

        default: // parents
          --len;
          break;
    }
              
  }


  return 0;
}
